import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius ex",
		fr: "Magirêve-ex",
		es: "Mismagius ex",
		it: "Mismagius-ex",
		de: "Traunmagil-ex",
		'pt-br': "Mismagius ex",
		ko: "무우마직 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [429],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Magical Delusion",
			fr: "Voyage Magique",
			es: "Ilusión Mágica",
			it: "Magillusione",
			de: "Magischer Wahn",
			'pt-br': "Delusão Mágica",
			ko: "매지컬트립"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card