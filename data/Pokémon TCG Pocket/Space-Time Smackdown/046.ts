import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		de: "Glaziola",
		'pt-br': "Glaceon",
		ko: "글레이시아"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [471],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It can control its body temperature at will. This enables it to freeze the moisture in the atmosphere, creating flurries of diamond dust.",
		fr: "Il peut contrôler la température de son corps à volonté\net créer des cristaux de glace en gelant l'humidité de l'air.",
		es: "Controla a su antojo la temperatura corporal\ny congela las partículas de agua que flotan en\nel aire para provocar ráfagas de nieve en polvo.",
		it: "Può modificare a piacimento la sua temperatura\ncorporea. Così può congelare l'umidità dell'aria\ne creare cristalli di ghiaccio intorno a sé.",
		de: "Es kann seine Körpertemperatur frei regulieren.\nIndem es die Wasserbestandteile der Luft\ngefrieren lässt, wirbelt es Diamantstaub auf.",
		'pt-br': "Pode controlar a temperatura de seu corpo\ncomo bem entender. Isso permite congelar a umidade\nna atmosfera, criando flocos de pó de diamante.",
		ko: "체온을 자유자재로 컨트롤해\n대기의 수분을 얼려서\n다이아몬드더스트를 일으킨다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
			es: "Rayo Hielo",
			it: "Geloraggio",
			de: "Eisstrahl",
			'pt-br': "Raio Congelante",
			ko: "냉동빔"
		},

		damage: 60,
		cost: ["Water", "Water"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
