import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burning Scales",
				fr: "Écailles Enflammées",
				es: "Escamas Llameantes",
				it: "Scagliardente",
				pt: "Escamas Abrasadoras",
				de: "Brennende Schuppen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Este ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Wheel",
				fr: "Roue Éolienne",
				es: "Rueda de Viento",
				it: "Girandola",
				pt: "Roda de Vento",
				de: "Windrad"
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o Pokémon Ativo por 1 dos próprios Pokémon no Banco.",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 80,

		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			de: "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	thirdParty: {
		cardmarket: 284198,
		tcgplayer: 101439
	}
}

export default card
