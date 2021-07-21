import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
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
				en: "Victory Star",
				fr: "Victorieux",
				es: "Tinovictoria",
				it: "Vittorstella",
				pt: "Estrela da Vitória",
				de: "Triumphstern"
			},
			effect: {
				en: "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can’t use more than 1 Victory Star Ability each turn.",
				fr: "Une seule fois pendant votre tour, après avoir lancé des pièces pour une attaque, vous pouvez ignorer les effets de ces lancers de pièce et lancer ces pièces à nouveau. Vous ne pouvez pas utiliser la capacité spéciale Victorieux plus d’une fois par tour.",
				es: "Una vez durante tu turno, después de lanzar cualquier moneda para un ataque, puedes ignorar todos los efectos de esos lanzamientos de monedas y empezar a lanzar esas monedas de nuevo. No puedes usar más de 1 Habilidad Tinovictoria en cada turno.",
				it: "Una sola volta durante il tuo turno, dopo aver lanciato la moneta tutte le volte richieste da un attacco, puoi ignorare tutti gli effetti di quei lanci e lanciare nuovamente la moneta. Puoi usare l’abilità Vittorstella solo una volta per turno.",
				pt: "Uma vez durante sua vez de jogar, após jogar quaisquer moedas para um ataque, você pode ignorar todos os efeitos das moedas jogadas e começar a jogá-las novamente. Não é possível usar mais de 1 Habilidade Estrela da Vitória por vez de jogar.",
				de: "Einmal während deines Zuges, nachdem du Münzen für eine Attacke geworfen hast, kannst du alle daraus resultierenden Effekte ignorieren und die Münzen erneut werfen. Du kannst die Fähigkeit Triumphstern nur einmal pro Zug einsetzen."
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
				en: "V Flame",
				fr: "V-Flamme",
				es: "Llama V",
				it: "Fiamma V",
				pt: "Chama V",
				de: "V-Flamme"
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



}

export default card
