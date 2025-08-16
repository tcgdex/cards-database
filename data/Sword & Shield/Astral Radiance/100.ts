import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		en: "Hisuian Samurott",
		fr: "Clamiral de Hisui",
		es: "Samurott de Hisui",
		it: "Samurott di Hisui",
		pt: "Samurott de Hisui",
		de: "Hisui-Admurai"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
		es: "Dewott",
		it: "Dewott",
		pt: "Dewott",
		de: "Zwottronin"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wily Stance",
			fr: "Posture Rusée",
			es: "Posición Astuta",
			it: "Posa Scaltra",
			pt: "Postura Ardilosa",
			de: "Gewiefte Taktik"
		},

		effect: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards.",
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			pt: "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Dark Mastery",
			fr: "Maîtrise Obscure",
			es: "Maestría Oscura",
			it: "Maestria Oscura",
			pt: "Maestria Sombria",
			de: "Meister der Dunkelheit"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658755,
		tcgplayer: 272301
	}
}

export default card
