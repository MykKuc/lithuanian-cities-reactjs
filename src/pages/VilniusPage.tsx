import MayorBox from "../components/mayor-component/MayorBox";
import LinkToMoreInfo from "../components/link-to-more-info/LinkToMoreInfo";


const vilniusMayorBiography = `Remigijus Simasius was born in 1974 January 12th in Taurage, Lithuania.
                In 2002 he finished his doctorate degree in law.
                He did an internship at the "Heritage Foundation".
                In 2008 he took office as a justice minister of Lithuania.
                In 2015 he became the mayor of Vilnius.`;

const wikiVilnius = `https://en.wikipedia.org/wiki/Vilnius`;

const VilniusPage = () => {
        return(
            <div>
                    <MayorBox />

                <LinkToMoreInfo />
            </div>
        )
}

export default VilniusPage;
