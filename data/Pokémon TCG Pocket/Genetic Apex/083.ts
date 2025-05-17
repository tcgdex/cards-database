import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		de: "Arktos",
		'pt-br': "Articuno",
		ko: "프리져"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
			es: "Rayo Hielo",
			it: "Geloraggio",
			de: "Eisstrahl",
			'pt-br': "Raio Congelante",
			ko: "냉동빔"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
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
		en: "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
		fr: "On raconte que ses belles plumes bleues sont\nfaites de glace. Sa longue queue flotte au vent\nlorsqu'il vole au-dessus des monts enneigés.",
		es: "Se dice que sus bellas alas azules se\ncomponen de hielo. Vuela en torno a las\nmontañas nevadas con su larga cola al viento.",
		it: "Si dice che le sue splendide ali azzurre siano\ncomposte di ghiaccio. Vola fra le montagne\ninnevate facendo ondeggiare la sua lunga coda.",
		de: "Seine wunderschönen blauen Flügel sollen aus Eis\nbestehen. Es fliegt über schneebedeckte Berge,\nwährend sein langer Schweif hinter ihm flattert.",
		'pt-br': "Dizem que as lindas asas azuis deste Pokémon\nsão feitas de gelo. Articuno sobrevoa montanhas\ncom sua longa cauda balançando atrás de si.",
		ko: "푸르고 아름다운 날개는 얼음으로\n되어 있다고 전해진다. 긴 꼬리를\n나부끼며 설산 위를 난다."
	}
}

export default card
