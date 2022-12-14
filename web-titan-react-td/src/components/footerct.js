import email from '../images/email.png'
import spyke from '../images/112.png'
import talk from '../images/talk-with-us.svg'
import chat from '../images/chat-with-us.svg'


function Footerct() {
    return (
        <div className="boxbox box-1">
            <div className="items-ft">
                <div className="item">
                    <h3>Headquarters:</h3>
                    <p>40 Lam Son Street, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam</p>
                    <p className="sdt" href="#">Tel: +84-28-3997-7233</p>
                    <div className="item-icon">
                        <h3>General Inquiries:</h3>
                        <ul>
                            <li>
                                <a><img src={email} alt="email" /> info@titancorpvn.com</a> <br />
                            </li>
                            <li>
                                <a><img src={spyke} alt="spyke" /> titancorpvn</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <h3>Branch office:</h3>
                    <p>50 Cuu Long Street, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam.</p>
                    <p className="sdt" href="#">Tel: +84-28-3997-7233</p>
                    <div className="item-icon">
                        <h3>Sales & Support:</h3>
                        <ul>
                            <li>
                                <a><img src={email} alt="email" /> sales@titancorpvn.com</a> <br />
                            </li>
                            <li>
                                <a><img src={email} alt="email" /> support@titancorpvn.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <h3>Branch office:</h3>
                    <p>9/1/2 Tran Dai Nghia Street, Ward 8, Da Lat City, Vietnam.</p>
                    <p className="sdt" href="#">Tel: +84-26-3382-8379</p>
                    <div className="item-icon">
                        <h3>Online Support:</h3>
                        <button><img src={talk} alt="talk" />Talk With Us</button>
                        <button><img src={chat} alt="chat" />Chat With Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footerct;
