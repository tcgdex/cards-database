import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Chien-Pao ex",
		fr: "Baojian-ex",
		es: "Chien-Pao ex",
		it: "Chien-Pao-ex",
		de: "Baojian-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shivery Chill",
			fr: "Frisson Glacé",
			es: "Frío Escalofriante",
			it: "Tremagelo",
			de: "Kälteschauer"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may search your deck for up to 2 Basic Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Water de base, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes buscar en tu baraja hasta 2 cartas de Energía Water Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo fino a due carte Energia base Water, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dein Deck nach bis zu 2 Basis-Water-Energiekarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Hail Blade",
			fr: "Lame Grêle",
			es: "Tajo Granizo",
			it: "Lama di Grandine",
			de: "Hagelklinge"
		},

		effect: {
			en: "You may discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies Water que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar cualquier cantidad de Energías Water de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie Water che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			de: "Du kannst beliebig viele Water-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card