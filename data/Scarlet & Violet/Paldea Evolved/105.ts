import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		fr: "Forgelina",
		en: "Tinkaton",
		es: "Tinkaton",
		it: "Tinkaton",
		pt: "Tinkaton",
		de: "Granforgita"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Collecte de Matériaux",
			en: "Gather Materials",
			es: "Acopio de Materiales",
			it: "Raccolta di Materiali",
			pt: "Juntar Materiais",
			de: "Material sammeln"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			pt: "Você deve descartar uma carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Marteau Spécial",
			en: "Special Hammer",
			es: "Martillo Especial",
			it: "Martello Speciale",
			pt: "Martelo Especial",
			de: "Spezieller Hammer"
		},

		effect: {
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If this Pokémon has any Special Energy attached, this attack does 90 more damage.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Kouki Saitou"
}

export default card
