import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl VSTAR",
		fr: "Ptéra VSTAR",
		es: "Aerodactyl V-ASTRO",
		it: "Aerodactyl V ASTRO",
		pt: "Aerodactyl V-ASTRO",
		de: "Aerodactyl VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],

	evolveFrom: {
		en: "Aerodactyl V",
		fr: "Ptéra-V",
		es: "Aerodactyl V",
		it: "Aerodactyl-V",
		pt: "Aerodactyl V",
		de: "Aerodactyl-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Lost Dive",
			fr: "Plongée Perdue",
			es: "Zambullida Perdida",
			it: "Picchiata Perduta",
			pt: "Mergulho Perdido",
			de: "Sturzflug ins Nirgendwo"
		},

		effect: {
			en: "Put the top 3 cards of your deck in the Lost Zone.",
			fr: "Placez les 3 cartes du dessus de votre deck dans la Zone Perdue.",
			es: "Pon las 3 primeras cartas de tu baraja en la Zona Perdida.",
			it: "Metti le prime tre carte del tuo mazzo nell'area perduta.",
			pt: "Coloque as 3 cartas de cima do seu baralho na Zona Perdida.",
			de: "Lege die obersten 3 Karten deines Decks ins Nirgendwo."
		},

		damage: 240
	}, {
		cost: ["Colorless"],

		name: {
			en: "Ancient Star",
			fr: "Star Ancestrale",
			es: "Astro Ancestral",
			it: "Astro Antico",
			pt: "Ancião Astral",
			de: "Urzeitstern"
		},

		effect: {
			en: "Until this Pokémon leaves play, it gains an Ability that has the effect \"Your opponent's Pokémon V in play, except any Aerodactyl VSTAR, have no Abilities.\" (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Tant que ce Pokémon est en jeu, il obtient un talent ayant l'effet \" Les Pokémon-V en jeu de votre adversaire, à l'exception d'un Ptéra-VSTAR, n'ont pas de talent \". (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Mientras este Pokémon esté en juego, obtiene una habilidad que tiene el siguiente efecto: \"Los Pokémon V en juego de tu rival, excepto los Aerodactyl V-ASTRO, no tienen ninguna habilidad\". (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Finché questo Pokémon rimane in gioco, possiede un'abilità che ha l'effetto: \"i Pokémon-V in gioco del tuo avversario, a eccezione di qualsiasi Aerodactyl-V ASTRO, non hanno abilità\". Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Até este Pokémon sair de jogo, ele ganhará uma Habilidade com o efeito \"Os Pokémon V do seu oponente em jogo, exceto por quaisquer Aerodactyl V-ASTRO, não têm Habilidades.\" (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Bis dieses Pokémon das Spiel verlässt, erhält es eine Fähigkeit mit dem Effekt \"Die Pokémon-V deines Gegners im Spiel, außer Aerodactyl-VSTAR, haben keine Fähigkeiten.\" (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card