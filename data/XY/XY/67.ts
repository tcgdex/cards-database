import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		es: "Conkeldurr",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		de: "Meistagrif"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Wake-Up Slap",
				fr: "Réveil Forcé",
				es: "Espabila",
				it: "Svegliopacca",
				pt: "Tapa do Despertar",
				de: "Weckruf"
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage. Then, remove all Special Conditions from that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce dernier.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 60 puntos de daño más. Después, elimina todas las Condiciones Especiales de ese Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 60 danni in più. Poi, rimuovi tutte le condizioni speciali da quel Pokémon.",
				pt: "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 60 de danos adicionais. Depois, remova todas as Condições Especiais desse Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 60 weitere Schadenspunkte zu. Anschließend verlieren alle Speziellen Zustände auf dem Pokémon ihre Wirkung."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamopoing",
				es: "Puñodinámico",
				it: "Dinamipugno",
				pt: "Soco Dinâmico",
				de: "Wuchtschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage and your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 40 de danos adicionais e o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281404,
		tcgplayer: 84421
	}
}

export default card
