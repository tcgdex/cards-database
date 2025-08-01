import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Nihilego",
		fr: "Zéroïd",
		es: "Nihilego",
		it: "Nihilego",
		pt: "Nihilego",
		de: "Anego"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		793,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Nightcap",
				fr: "Encore Un",
				es: "Bebida Anochecer",
				it: "Estremo Rimedio",
				pt: "Saideira",
				de: "Absacker"
			},
			effect: {
				en: "You can use this attack only if your opponent has exactly 2 Prize cards remaining. Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack.",
				fr: "Vous ne pouvez utiliser cette attaque que s’il reste exactement 2 cartes Récompense à votre adversaire. Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Puedes usar este ataque solo si a tu rival le quedan exactamente 2 cartas de Premio. Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque.",
				it: "Puoi usare questo attacco solo se il tuo avversario ha esattamente due carte Premio rimanenti. Scegli un attacco dei Pokémon del tuo avversario e usalo al posto di questo attacco.",
				pt: "Você só pode usar este ataque se seu oponente tiver exatamente 2 cartas de Prêmio restantes. Escolha 1 dos ataques dos Pokémon do seu oponente e use-o como este ataque.",
				de: "Du kannst diese Attacke nur einsetzen, wenn dein Gegner genau 2 verbleibende Preiskarten hat. Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Void Tentacles",
				fr: "Tentacules du Néant",
				es: "Tentáculos Nihilistas",
				it: "Tentacoli Annichilenti",
				pt: "Tentáculos do Vácuo",
				de: "Tentakel der Leere"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365743
	}
}

export default card
