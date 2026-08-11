import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [185],
	set: Set,

	name: {
		'en-us': "Ethan's Sudowoodo",
		'fr-fr': "Simularbre de Luth",
		'de-de': "Klarins Mogelbaum",
		'it-it': "Sudowoodo di Armonio",
		'es-es': "Sudowoodo de Eco",
		'pt-br': "Sudowoodo do Ethan",
		'es-mx': "Sudowoodo de Ethan"
	},


	illustrator: "OKACHEKE",

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Impound",
			'fr-fr': "Confiscation",
			'de-de': "Festsetzen",
			'it-it': "Isolamento",
			'es-es': "Confiscar",
			'pt-br': "Apreensão",
			'es-mx': "Confinamiento"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Try to Imitate",
			'fr-fr': "Tentative d'Imitation",
			'de-de': "Imitationsversuch",
			'it-it': "Prova a Imitare",
			'es-es': "Intento de Imitación",
			'pt-br': "Tentar Imitar",
			'es-mx': "Intento de Imitación"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'it-it': "Lancia una moneta. Se esce testa, scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825970,
				tcgplayer: 632902
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825970,
				tcgplayer: 632902
			}
		},
	],
}

export default card
