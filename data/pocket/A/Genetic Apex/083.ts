import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'de-de': "Arktos",
		'pt-br': "Articuno",
		'ko-kr': "프리져"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",

	dexId: [144],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Ice Beam",
			'fr-fr': "Laser Glace",
			'es-es': "Rayo Hielo",
			'it-it': "Geloraggio",
			'de-de': "Eisstrahl",
			'pt-br': "Raio Congelante",
			'ko-kr': "냉동빔"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		'en-us': "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
		'fr-fr': "On raconte que ses belles plumes bleues sont\nfaites de glace. Sa longue queue flotte au vent\nlorsqu'il vole au-dessus des monts enneigés.",
		'es-es': "Se dice que sus bellas alas azules se\ncomponen de hielo. Vuela en torno a las\nmontañas nevadas con su larga cola al viento.",
		'it-it': "Si dice che le sue splendide ali azzurre siano\ncomposte di ghiaccio. Vola fra le montagne\ninnevate facendo ondeggiare la sua lunga coda.",
		'de-de': "Seine wunderschönen blauen Flügel sollen aus Eis\nbestehen. Es fliegt über schneebedeckte Berge,\nwährend sein langer Schweif hinter ihm flattert.",
		'pt-br': "Dizem que as lindas asas azuis deste Pokémon\nsão feitas de gelo. Articuno sobrevoa montanhas\ncom sua longa cauda balançando atrás de si.",
		'ko-kr': "푸르고 아름다운 날개는 얼음으로\n되어 있다고 전해진다. 긴 꼬리를\n나부끼며 설산 위를 난다."
	},

	boosters: ["mewtwo"]
}

export default card
