import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		167,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Poison",
				fr: "Poison Neural",
				es: "Veneno Paralizador",
				it: "Bloccanervi",
				pt: "Veneno Paralisante",
				de: "Nervengift"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado e Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercer",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361252,
		tcgplayer: 170811
	}
}

export default card
