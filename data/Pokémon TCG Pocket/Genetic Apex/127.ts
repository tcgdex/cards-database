import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		de: "Rossana",
		'pt-br': "Jynx",
		ko: "루주라"
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
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			de: "Psychokinese",
			'pt-br': "Psíquico",
			ko: "사이코키네시스"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
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
		en: "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
		fr: "Ses étranges cris s'apparentent à des mots. Certains musiciens\nlui composent des chansons pour qu'il les interprète.",
		es: "Sus particulares gritos recuerdan al lenguaje\nhumano. Algunos artistas han compuesto\ntemas específicamente para estos Pokémon.",
		it: "Emette strani versi che ricordano il linguaggio\numano. Alcuni compositori scrivono melodie\nappositamente per farle cantare ai Jynx.",
		de: "Sein sonderbarer Ruf klingt fast wie die Sprache\nder Menschen. Manche Musiker schreiben sogar\neigens Lieder, damit Rossana sie singen kann.",
		'pt-br': "Seu grito estranho soa como fala humana.\nCertos músicos compõem canções\nespecificamente para Jynx cantar.",
		ko: "인간의 언어를 닮은 이상한\n울음소리를 가졌다. 루주라가 부르는\n곡을 만드는 음악가도 있다."
	},

	boosters: ["mewtwo"]
}

export default card
