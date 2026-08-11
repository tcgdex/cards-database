import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lunala ex",
		fr: "Lunala-ex",
		es: "Lunala ex",
		it: "Lunala-ex",
		de: "Lunala-ex",
		'pt-br': "Lunala ex",
		ko: "루나아라 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [792],
	hp: 180,
	types: ["Psychic"],

	evolveFrom: {
		en: "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psychic Connect",
			fr: "Connexion Psy",
			es: "Conexión Psíquica",
			it: "Connessione Psichica",
			de: "Psychoverbindung",
			'pt-br': "Conexão Psíquica",
			ko: "사이코커넥트"
		},

		effect: {
			en: "Once during your turn, you may move all {P} Energy from 1 of your Benched {P} Pokémon to your Active Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer toute l'Énergie {P} de l'un de vos Pokémon {P} de Banc vers votre Pokémon Actif.",
			es: "Una vez durante tu turno, puedes mover todas las Energías {P} de 1 de tus Pokémon {P} en Banca a tu Pokémon Activo.",
			it: "Una sola volta durante il tuo turno, puoi spostare tutte le Energie {P} da uno dei tuoi Pokémon {P} in panchina al tuo Pokémon attivo.",
			de: "Einmal während deines Zuges kannst du alle {P}-Energien von 1 {P}-Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben.",
			'pt-br': "Uma vez durante o seu turno, você pode mover todas as Energias {P} de 1 dos seus Pokémon {P} no Banco para o seu Pokémon Ativo.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 벤치의 {P}포켓몬 1마리로부터 {P}에너지를 모두 배틀 포켓몬에게 바꿔 붙인다."
		}
	}],

	attacks: [{
		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
			es: "Explosión Lunar",
			it: "Furia Lunare",
			de: "Mondsturm",
			'pt-br': "Detonação Lunar",
			ko: "루나블라스트"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card
