import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		'en-us': "Farigiraf",
		'fr-fr': "Farigiraf",
		'es-es': "Farigiraf",
		'it-it': "Farigiraf",
		'pt-br': "Farigiraf",
		'de-de': "Farigiraf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "One-derful Rumble",
			'fr-fr': "Tous Pour 1",
			'es-es': "Retumbar de los Unos",
			'it-it': "Baruffa di Uno",
			'pt-br': "Arranca-rabo Incom-um",
			'de-de': "Einzigartige Randale"
		},

		effect: {
			'en-us': "This attack does 40 damage for each of your Stage 1 Pokémon in play.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon de Niveau 1 en jeu.",
			'es-es': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Fase 1 en juego.",
			'it-it': "Questo attacco infligge 40 danni per ogni tuo Pokémon di Fase 1 in gioco.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon Estágio 1 em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Phase-1-Pokémon im Spiel 40 Schadenspunkte zu."
		},

		damage: "40×"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Eerie Wave",
			'fr-fr': "Vague Étrange",
			'es-es': "Onda Sobrecogedora",
			'it-it': "Ondamistero",
			'pt-br': "Onda Misteriosa",
			'de-de': "Gespenstische Woge"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The hardened head from the tail protects the head of the main body as Farigiraf whips its long neck around to headbutt enemies.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769258,
				tcgplayer: 550128
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769258,
				tcgplayer: 550128
			}
		},
	],

	illustrator: "Dsuke",

}

export default card