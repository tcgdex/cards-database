import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [185],
	set: Set,

	name: {
		en: "Ethan's Sudowoodo",
		fr: "Simularbre de Luth",
		de: "Klarins Mogelbaum",
		it: "Sudowoodo di Armonio",
		es: "Sudowoodo de Eco",
		pt: "Sudowoodo do Ethan",
		'es-mx': "Sudowoodo de Ethan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Impound",
			fr: "Confiscation",
			de: "Festsetzen",
			it: "Isolamento",
			es: "Confiscar",
			pt: "Apreensão",
			'es-mx': "Confinamiento"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Try to Imitate",
			fr: "Tentative d'Imitation",
			de: "Imitationsversuch",
			it: "Prova a Imitare",
			es: "Intento de Imitación",
			pt: "Tentar Imitar",
			'es-mx': "Intento de Imitación"
		},

		effect: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			it: "Lancia una moneta. Se esce testa, scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			es: "Lanza 1 moneda. Si sale cara, elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			pt: "Jogue uma moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
