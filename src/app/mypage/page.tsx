import styles from "../styles/mypage/mypage.module.css";
import ProfileCard from "../components/mypage/profile-card-layout";
import Calculator from "../components/mypage/salary-calculator";
import ResultCount from "../components/mypage/result-count-layout";
export default function Mypage() {

    return (
        <div className={styles.allContainer}>
            <div className={styles.profileContainer}>
                <p className={`${styles.contentName} ${styles.mypageTitle}`}>마이페이지</p>
                {/* 프로필 카드 컴포넌트 (내용은 임시) */}
                <ProfileCard
                    username="닉네임"
                    userId="d2329@e-mirim.hs.kr"
                />
            </div>


            {/* 실수령액 계산기 */}
            <div className={styles.calculateContainer}>
                <p className={`${styles.contentName} ${styles.calTitle}`}>실수령액 계산기</p>
                <Calculator />
            </div>

            {/* 계산 결과 */}
            <div>
                <ResultCount />
            </div>


        </div>
    )
}