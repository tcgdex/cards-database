import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Pincurchin V",
		fr: "Wattapik V",
		es: "Pincurchin V",
		it: "Pincurchin V",
		pt: "Pincurchin V",
		de: "Britzigel V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack Kerzap",
				fr: "Zap Contre-Attaque",
				es: "Contraataque Zap",
				it: "Respinta Kerzap",
				pt: "Contra-ataque Chocante",
				de: "Gegenangriff-Kerzap"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), flip 3 coins. For each heads, put 3 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même s'il est mis K.O.), lancez 3 pièces. Pour chaque côté face, placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de tu rival (incluso si queda Fuera de Combate), lanza 3 monedas. Por cada cara, pon 3 contadores de daño en el Pokémon Atacante.",
				it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dell'avversario, anche se viene messo KO, lancia tre volte una moneta. Ogni volta che esce testa, metti tre segnalini danno sul Pokémon attaccante.",
				pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque do seu oponente (mesmo que ele seja Nocauteado), jogue 3 moedas. Para cada cara, coloque 3 contadores de dano no Pokémon Atacante.",
				de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), wirf 3 Münzen. Lege pro Kopf 3 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sparking Strike",
				fr: "Frappe Étincelante",
				es: "Golpe Chispeante",
				it: "Colpo Scintilla",
				pt: "Golpe Cintilante",
				de: "Funkenschlag"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 170,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 457778
	}
}

export default card
