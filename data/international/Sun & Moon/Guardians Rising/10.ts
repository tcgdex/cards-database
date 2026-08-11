import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Victory Star",
				'fr-fr': "Victorieux",
				'es-es': "Tinovictoria",
				'it-it': "Vittorstella",
				'pt-br': "Estrela da Vitória",
				'de-de': "Triumphstern"
			},
			effect: {
				'en-us': "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can’t use more than 1 Victory Star Ability each turn.",
				'fr-fr': "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser la capacité spéciale Victorieux plus d’une fois par tour.",
				'es-es': "Una vez durante tu turno, después de lanzar cualquier moneda para un ataque, puedes ignorar todos los efectos de esos lanzamientos de monedas y empezar a lanzar esas monedas de nuevo. No puedes usar más de 1 Habilidad Tinovictoria en cada turno.",
				'it-it': "Una sola volta durante il tuo turno, dopo aver lanciato la moneta tutte le volte richieste da un attacco, puoi ignorare tutti gli effetti di quei lanci e lanciare nuovamente la moneta. Puoi usare l’abilità Vittorstella solo una volta per turno.",
				'pt-br': "Uma vez durante sua vez de jogar, após jogar quaisquer moedas para um ataque, você pode ignorar todos os efeitos das moedas jogadas e começar a jogá-las novamente. Não é possível usar mais de 1 Habilidade Estrela da Vitória por vez de jogar.",
				'de-de': "Einmal während deines Zuges, nachdem du Münzen für eine Attacke geworfen hast, kannst du alle daraus resultierenden Effekte ignorieren und die Münzen erneut werfen. Du kannst die Fähigkeit Triumphstern nur einmal pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "V Flame",
				'fr-fr': "V-Flamme",
				'es-es': "Llama V",
				'it-it': "Fiamma V",
				'pt-br': "Chama V",
				'de-de': "V-Flamme"
			},

			damage: 50,

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
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},

	thirdParty: {
		cardmarket: 297474,
		tcgplayer: 130756
	}
}

export default card
