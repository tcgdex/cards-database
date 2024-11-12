import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Gastrodon",
		fr: "Tritosor",
		es: "Gastrodon",
		it: "Gastrodon",
		pt: "Gastrodon",
		de: "Gastrodon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sticky Bind",
			fr: "Entrave Collante",
			es: "Sujeción Pegajosa",
			it: "Legame Viscoso",
			pt: "Aprisionamento Pegajoso",
			de: "Klebrige Fessel"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, Benched Stage 2 Pokémon (both yours and your opponent's) have no Abilities.",
			fr: "Tant que ce Pokémon est sur votre Banc, les Pokémon de Banc de Niveau 2 (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			es: "Mientras este Pokémon esté en tu Banca, los Pokémon de Fase 2 en Banca (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			it: "Fintanto che questo Pokémon è nella tua panchina, i Pokémon di Fase 2 in panchina, sia tuoi che del tuo avversario, non hanno abilità.",
			pt: "Enquanto este Pokémon estiver no seu Banco, os Pokémon Estágio 2 no Banco (seus e do seu oponente) não terão Habilidades.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, haben Phase-2-Pokémon auf der Bank (deiner und der deines Gegners) keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card