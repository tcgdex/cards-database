import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		de: "Seemon",
		'pt-br': "Seadra",
		ko: "시드라"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Horsea"
	},


	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Water Arrow",
			fr: "Flèche d'Eau",
			es: "Flecha de Agua",
			it: "Idrofreccia",
			de: "Wasserpfeil",
			'pt-br': "Flecha d'Água",
			ko: "워터애로"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It's the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
		fr: "Les mâles s'occupent des petits, et tant qu'ils en\nont à élever, le venin contenu dans leurs épines\ndorsales devient beaucoup plus fort.",
		es: "En esta especie, es el macho quien se ocupa de\nla prole. Durante la época de cría, el veneno de\nlas púas de su espalda se vuelve más potente.",
		it: "Il maschio si occupa dei piccoli. Quando li alleva, il\nveleno degli aculei dorsali diventa denso e potente.",
		de: "Männlichen Seemon obliegt es, den Nachwuchs\ngroßzuziehen. In diesem Zeitraum ist das Gift in\nihren Rückenstacheln stärker und dickflüssiger.",
		'pt-br': "São os machos que cuidam das crias. Enquanto\nSeadra criam os mais jovens, os espinhos em suas\ncostas secretam um veneno mais grosso e potente.",
		ko: "수컷이 새끼를 기른다.\n새끼를 기르는 동안 등에 난\n가시의 독소는 강해지고 짙어진다."
	}
}

export default card
