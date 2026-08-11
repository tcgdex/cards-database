import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [455],
	set: Set,

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Festering Saliva",
			'fr-fr': "Salive Suppurative",
			'es-es': "Saliva Infecciosa",
			'it-it': "Saliva Infetta",
			'pt-br': "Saliva Asquerosa",
			'de-de': "Schwärender Speichel"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und vergiftet."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691729,
				tcgplayer: 478064
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691729,
				tcgplayer: 478064
			}
		},
	],
}

export default card
