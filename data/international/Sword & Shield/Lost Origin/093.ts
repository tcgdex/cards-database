import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [142],
	set: Set,

	name: {
		'en-us': "Aerodactyl VSTAR",
		'fr-fr': "Ptéra VSTAR",
		'es-es': "Aerodactyl V-ASTRO",
		'it-it': "Aerodactyl V ASTRO",
		'pt-br': "Aerodactyl V-ASTRO",
		'de-de': "Aerodactyl VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Aerodactyl V",
		'fr-fr': "Ptéra-V",
		'es-es': "Aerodactyl V",
		'it-it': "Aerodactyl-V",
		'pt-br': "Aerodactyl V",
		'de-de': "Aerodactyl-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Lost Dive",
			'fr-fr': "Plongée Perdue",
			'es-es': "Zambullida Perdida",
			'it-it': "Picchiata Perduta",
			'pt-br': "Mergulho Perdido",
			'de-de': "Sturzflug ins Nirgendwo"
		},

		effect: {
			'en-us': "Put the top 3 cards of your deck in the Lost Zone.",
			'fr-fr': "Placez les 3 cartes du dessus de votre deck dans la Zone Perdue.",
			'es-es': "Pon las 3 primeras cartas de tu baraja en la Zona Perdida.",
			'it-it': "Metti le prime tre carte del tuo mazzo nell'area perduta.",
			'pt-br': "Coloque as 3 cartas de cima do seu baralho na Zona Perdida.",
			'de-de': "Lege die obersten 3 Karten deines Decks ins Nirgendwo."
		},

		damage: 240
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Ancient Star",
			'fr-fr': "Star Ancestrale",
			'es-es': "Astro Ancestral",
			'it-it': "Astro Antico",
			'pt-br': "Ancião Astral",
			'de-de': "Urzeitstern"
		},

		effect: {
			'en-us': "Until this Pokémon leaves play, it gains an Ability that has the effect \"Your opponent's Pokémon V in play, except any Aerodactyl VSTAR, have no Abilities.\" (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Tant que ce Pokémon est en jeu, il obtient un talent ayant l'effet \" Les Pokémon-V en jeu de votre adversaire, à l'exception d'un Ptéra-VSTAR, n'ont pas de talent \". (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Mientras este Pokémon esté en juego, obtiene una habilidad que tiene el siguiente efecto: \"Los Pokémon V en juego de tu rival, excepto los Aerodactyl V-ASTRO, no tienen ninguna habilidad\". (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Finché questo Pokémon rimane in gioco, possiede un'abilità che ha l'effetto: \"i Pokémon-V in gioco del tuo avversario, a eccezione di qualsiasi Aerodactyl-V ASTRO, non hanno abilità\". Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Até este Pokémon sair de jogo, ele ganhará uma Habilidade com o efeito \"Os Pokémon V do seu oponente em jogo, exceto por quaisquer Aerodactyl V-ASTRO, não têm Habilidades.\" (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Bis dieses Pokémon das Spiel verlässt, erhält es eine Fähigkeit mit dem Effekt \"Die Pokémon-V deines Gegners im Spiel, außer Aerodactyl-VSTAR, haben keine Fähigkeiten.\" (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670815,
				tcgplayer: 282255
			}
		},
	],
}

export default card
