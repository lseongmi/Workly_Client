"use client";
import styles from "../../styles/tips/infoCard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

interface InfoCardProps {
  width: string;
  padding: string;
  title: string;
  detail: string;
  gap: string;
  className: string;
  marginRight: string;
  category: string;
  tabType: "word" | "tip";
  contentId: string;
}
export default function InfoCard({
  width,
  padding,
  title,
  detail,
  gap,
  className,
  marginRight,
  category,
  tabType,
  contentId,
}: InfoCardProps) {
  const [isBookmark, setIsBookmark] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    //북마크 여부 확인 api
    const fetchStatus = async () => {
      try {
        const res = await axios.get(
          `http://43.201.95.2/stored/check/${tabType}/${contentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsBookmark(res.data.bookmarked);
        console.log("여부 확인", res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStatus();
  }, [tabType, contentId]);

  //북마크 추가 / 삭제 api
  const handleBookmark = async () => {
    if (!token) {
      console.error("token이 없습니다");
      return;
    }

    try {
      const res = await axios.post(
        "http://43.201.95.2/stored",
        {
          category: tabType,
          contentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsBookmark((prev) => !prev);
      console.log("정보", token, category, contentId);
      console.log("확인", res.data);
    } catch (err) {
      console.error("북마크 처리 중 오류", err);
    }
  };

  return (
    <div
      className={styles.infoCardContainer}
      style={{ width: width, padding: padding, marginRight: marginRight }}
    >
      <div className={styles.title} style={{ gap: gap }}>
        <span className={`${className ? styles[className] : ""}`}>{title}</span>

        <img
          src={
            isBookmark
              ? "/images/book-mark-clicked.png"
              : "/images/book-mark.png"
          }
          onClick={handleBookmark}
          style={{ width: "19px", height: "25px", cursor: "pointer" }}
        />
      </div>
      <div className={styles.detail}>{detail}</div>
      <div style={{ fontSize: "15px", marginTop: "10px", color: "#B8B8B8" }}>
        {category}
      </div>
    </div>
  );
}
