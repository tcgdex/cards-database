import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [1002],
	set: Set,

	name: {
		fr: "Baojian-ex",
		en: "Chien-Pao ex",
		es: "Chien-Pao ex",
		it: "Chien-Pao-ex",
		pt: "Chien-Pao ex",
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
			fr: "Frisson Glacé",
			en: "Shivery Chill",
			es: "Frío Escalofriante",
			it: "Tremagelo",
			pt: "Calafrio Arrepiante",
			de: "Kälteschauer"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie {W} de base, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may search your deck for up to 2 Basic {W} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes buscar en tu baraja hasta 2 cartas de Energía {W} Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo fino a due carte Energia base {W}, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá procurar por até 2 cartas de Energia {W} Básica no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dein Deck nach bis zu 2 Basis-{W}-Energiekarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Lame Grêle",
			en: "Hail Blade",
			es: "Tajo Granizo",
			it: "Lama di Grandine",
			pt: "Lâmina de Granizo",
			de: "Hagelklinge"
		},

		effect: {
			fr: "Vous pouvez défausser autant d'Énergies {W} que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			en: "You may discard any amount of {W} Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			es: "Puedes descartar cualquier cantidad de Energías {W} de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie {W} che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar qualquer quantidade de Energia {W} dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			de: "Du kannst beliebig viele {W}-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "aky CG Works"
}

export default card