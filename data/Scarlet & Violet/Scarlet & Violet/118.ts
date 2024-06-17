import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flying Entry",
			fr: "Entrée Aérienne",
			es: "Entrada Voladora",
			it: "Entrata al Volo",
			pt: "Entrada Voadora",
			de: "Fliegender Auftritt"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may choose 2 of your opponent's Benched Pokémon and put 1 damage counter on each of them.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez choisir 2 des Pokémon de Banc de votre adversaire, puis placer un marqueur de dégâts sur chacun d'eux.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes elegir 2 de los Pokémon en Banca de tu rival y poner 1 contador de daño en cada uno de ellos.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scegliere due dei Pokémon nella panchina del tuo avversario e mettere un segnalino danno su ciascuno di essi.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá escolher 2 dos Pokémon no Banco do seu oponente e colocar 1 contador de dano em cada um deles.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 2 Pokémon auf der Bank deines Gegners wählen und 1 Schadensmarke auf jedes von ihnen legen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "GOSSAN",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card