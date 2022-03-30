import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Sceptile EX",
		fr: "Jungko EX",
		es: "Sceptile EX",
		it: "Sceptile EX",
		pt: "Sceptile EX",
		de: "Gewaldro EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 170,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison Dodo",
				es: "Veneno Somnífero",
				it: "Sonnoveleno",
				pt: "Veneno Sonífero",
				de: "Schlafgift"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt und ist vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Unseen Claw",
				fr: "Griffe Invisible",
				es: "Garra Oculta",
				it: "Artigli Invisibili",
				pt: "Garra Despercebida",
				de: "Klammheimliche Klaue"
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, este ataque causará 70 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic"
}

export default card
