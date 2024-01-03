import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Torrential Awakening",
			fr: "Éveil Torrentiel",
			es: "Despertar Torrencial",
			it: "Risveglio Torrenziale",
			pt: "Despertar Torrencial",
			de: "Reißendes Erwachen"
		},

		effect: {
			en: "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent's) have no Abilities.",
			fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			es: "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Fire en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			it: "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Fire in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
			pt: "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Fire em jogo (seus e do seu oponente) não terão Habilidades.",
			de: "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Fire-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora",
			de: "Aurorastrahl"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "D",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card