import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Pincurchin V",
		'fr-fr': "Wattapik V",
		'es-es': "Pincurchin V",
		'it-it': "Pincurchin V",
		'pt-br': "Pincurchin V",
		'de-de': "Britzigel V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [871],
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Counterattack Kerzap",
				'fr-fr': "Zap Contre-Attaque",
				'es-es': "Contraataque Zap",
				'it-it': "Respinta Kerzap",
				'pt-br': "Contra-ataque Chocante",
				'de-de': "Gegenangriff-Kerzap"
			},
			effect: {
				'en-us': "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), flip 3 coins. For each heads, put 3 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même s'il est mis K.O.), lancez 3 pièces. Pour chaque côté face, placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de tu rival (incluso si queda Fuera de Combate), lanza 3 monedas. Por cada cara, pon 3 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dell'avversario, anche se viene messo KO, lancia tre volte una moneta. Ogni volta che esce testa, metti tre segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque do seu oponente (mesmo que ele seja Nocauteado), jogue 3 moedas. Para cada cara, coloque 3 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), wirf 3 Münzen. Lege pro Kopf 3 Schadensmarken auf das Angreifende Pokémon."
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
				'en-us': "Sparking Strike",
				'fr-fr': "Frappe Étincelante",
				'es-es': "Golpe Chispeante",
				'it-it': "Colpo Scintilla",
				'pt-br': "Golpe Cintilante",
				'de-de': "Funkenschlag"
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457778,
				tcgplayer: 213158
			}
		},
	],
}

export default card
