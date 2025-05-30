import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		de: "Resladero",
		it: "Hawlucha",
		es: "Hawlucha",
		pt: "Hawlucha"
	},

	illustrator: "GOSSAN",
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
			de: "Fliegender Auftritt",
			it: "Entrata al Volo",
			es: "Entrada Voladora",
			pt: "Entrada Voadora"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may choose 2 of your opponent's Benched Pokémon and put 1 damage counter on each of them.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez choisir 2 des Pokémon de Banc de votre adversaire, puis placer un marqueur de dégâts sur chacun d'eux.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 2 Pokémon auf der Bank deines Gegners wählen und 1 Schadensmarke auf jedes von ihnen legen.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scegliere due dei Pokémon nella panchina del tuo avversario e mettere un segnalino danno su ciascuno di essi.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes elegir 2 de los Pokémon en Banca de tu rival y poner 1 contador de daño en cada uno de ellos.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá escolher 2 dos Pokémon no Banco do seu oponente e colocar 1 contador de dano em cada um deles."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			de: "Flügelschlag",
			it: "Attacco d'Ala",
			es: "Ataque Ala",
			pt: "Ataque de Asa"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card