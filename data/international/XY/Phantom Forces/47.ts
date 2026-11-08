import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Submission Hold",
				'fr-fr': "Prise Pétrifiante",
				'es-es': "Sujeción Absoluta",
				'it-it': "Presa Sottomissione",
				'pt-br': "Chave da Submissão",
				'de-de': "Schwitzkasten"
			},
			effect: {
				'en-us': "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas attacher d'Énergie de sa main au Pokémon Défenseur pendant son prochain tour.",
				'es-es': "Tu rival no puede unir Energía de su mano al Pokémon Defensor durante su próximo turno.",
				'it-it': "Il tuo avversario non può assegnare Energia dalla sua mano al Pokémon difensore durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá ligar Energia da própria mão no Pokémon Defensor durante a próxima vez de jogar dele ou dela.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Energie von seiner Hand an das Verteidigende Pokémon anlegen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
	},

	thirdParty: {
		cardmarket: 281853,
		tcgplayer: 94505
	}
}

export default card
