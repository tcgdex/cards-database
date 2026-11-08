import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'de-de': "Rossana",
		'pt-br': "Jynx",
		'ko-kr': "루주라"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",

	dexId: [124],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'de-de': "Psychokinese",
			'pt-br': "Psíquico",
			'ko-kr': "사이코키네시스"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'ko-kr': "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
		'fr-fr': "Ses étranges cris s'apparentent à des mots. Certains musiciens\nlui composent des chansons pour qu'il les interprète.",
		'es-es': "Sus particulares gritos recuerdan al lenguaje\nhumano. Algunos artistas han compuesto\ntemas específicamente para estos Pokémon.",
		'it-it': "Emette strani versi che ricordano il linguaggio\numano. Alcuni compositori scrivono melodie\nappositamente per farle cantare ai Jynx.",
		'de-de': "Sein sonderbarer Ruf klingt fast wie die Sprache\nder Menschen. Manche Musiker schreiben sogar\neigens Lieder, damit Rossana sie singen kann.",
		'pt-br': "Seu grito estranho soa como fala humana.\nCertos músicos compõem canções\nespecificamente para Jynx cantar.",
		'ko-kr': "인간의 언어를 닮은 이상한\n울음소리를 가졌다. 루주라가 부르는\n곡을 만드는 음악가도 있다."
	},

	boosters: ["mewtwo"]
}

export default card
