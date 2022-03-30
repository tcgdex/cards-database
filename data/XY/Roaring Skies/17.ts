import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Plus Δ",
				en: "Δ Plus",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
				en: "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				es: "{title}: Si el Pokémon de tu rival queda Fuera de Combate por el daño de un ataque de este Pokémon, coge 1 carta de Premio más.",
				it: "{title}: Se un Pokémon del tuo avversario viene messo KO dai danni di un attacco di questo Pokémon, prendi una carta Premio in più.",
				pt: "{title}: Se o Pokémon de seu oponente for Nocauteado por danos causados por um ataque deste Pokémon, pegue mais 1 card de Prêmio.",
				de: "{title}: Wenn das Pokémon deines Gegners durch Schaden eines Angriffs dieses Pokémon kampfunfähig wird, nimm 1 zusätzliche Preiskarte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Chilling Sigh",
				fr: "Soupir Polaire",
				es: "Suspiro Frío",
				it: "Gelidospiro",
				pt: "Suspiro Refrescante",
				de: "Abkühlender Seufzer"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Tri Edge",
				fr: "Triple Tranchant",
				es: "Triple Filo",
				it: "Tritaglio",
				pt: "Três Gumes",
				de: "Dreispitzige Klinge"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia tre volte una moneta. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 3 moedas. Este ataque causa 40 de danos adicionais para cada cara.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
