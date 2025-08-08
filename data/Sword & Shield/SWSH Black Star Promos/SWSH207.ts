import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		fr: "Clamiral de Hisui",
		de: "Hisui-Admurai",
		es: "Samurott de Hisui",
		pt: "Samurott de Hisui",
		it: "Samurott di Hisui",
		en: "Hisuian Samurott"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Mateloutre",
		de: "Zwottronin",
		es: "Dewott",
		pt: "Dewott",
		it: "Dewott",
		en: "Dewott"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Posture Rusée",
			de: "Gewiefte Taktik",
			es: "Posición Astuta",
			pt: "Postura Ardilosa",
			it: "Posa Scaltra",
			en: "Wily Stance"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			pt: "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Maîtrise Obscure",
			de: "Meister der Dunkelheit",
			es: "Maestría Oscura",
			pt: "Maestria Sombria",
			it: "Maestria Oscura",
			en: "Dark Mastery"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
			en: "This attack does 20 more damage for each Energy attached to all of your Pokémon."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves."
	}
}

export default card