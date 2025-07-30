import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Attachez une énergie Multicolore à l’un de vos Pokémon. En jeu, l’énergie multicolore fournit tout type d’énergie, mais une seule énergie à la fois. (Fournit uniquement de l’énergie.) Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon. (Lorsqu’elle n’est pas en jeu, l’énergie multicolore compte comme de l’énergie Colorless.)",
		en: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon. (While not in play, Rainbow Energy counts as Colorless Energy.)",
		de: "Lege Regenbogen-Energie an 1 deiner Pokémon an. Solange Regenbogen-Energie im Spiel ist, zählt sie als jeder Energietyp, spendet aber immer nur eine Energie auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.) Wenn du diese Karte aus deiner Hand an 1 deiner Pokémon anlegst, lege 1 Schadensmarke auf dieses Pokémon. (Wenn Regenbogen-Energie nicht im Spiel ist, zählt sie als -Energie.)"
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279076
	}
}

export default card
