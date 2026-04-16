import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege Regenbogen-Energie an 1 deiner Pokémon an. Solange Regenbogen-Energie im Spiel ist, erzeugt Regenbogen-Energie jeden Energietyp, aber nur 1 Energie auf einmal. (Zählt nicht als Basis-Energiekarte, wenn nicht im Spiel.) Wenn du diese Karte aus deiner Hand an 1 deiner Pokémon anlegst, lege 1 Schadensmarke auf dieses Pokémon.",
		fr: "Attachez Énergie multicolore à un de vos Pokémon. Tant qu'Énergie multicolore est en jeu, elle remplace n'importe quel type d'Énergie mais ne fournit que 1 Énergie différente à la fois. (N'est pas considérée comme une carte Énergie de base quand elle n'est pas en jeu.) Quand vous attachez cette carte depuis votre main à l'un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon.",
	},

	thirdParty: {
		cardmarket: 275220,
		tcgplayer: 88552
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
