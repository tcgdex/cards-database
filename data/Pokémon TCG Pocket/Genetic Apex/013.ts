import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		de: "Giflor",
		'pt-br': "Vileplume",
		ko: "라플레시아"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",

	dexId: [45],
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		en: "Gloom"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Soothing Scent",
			fr: "Senteur Apaisante",
			es: "Aroma Sedante",
			it: "Aroma Calmante",
			de: "Beruhigender Duft",
			'pt-br': "Odor Calmante",
			ko: "아로마슬립"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
		fr: "Il possède les plus gros pétales au monde, qui sèment\nd'épais nuages de pollen toxique à chacun de ses pas.",
		es: "Tiene los pétalos más grandes del mundo.\nAl caminar, de ellos se desprenden\ndensas nubes de polen tóxico.",
		it: "Ha i petali più grandi del mondo.\nAd ogni suo passo, i petali liberano\nfitte nubi di polline tossico.",
		de: "Es besitzt die größten Blütenblätter\nder Welt. Bei jedem Schritt streut es\ngroße Mengen an Giftpollen zu Boden.",
		'pt-br': "Tem as maiores pétalas do mundo.\nA cada passo, as pétalas se agitam\ne liberam pesadas nuvens de pólen tóxico.",
		ko: "세계에서 제일 큰 꽃잎은\n걸을 때마다 흔들려 대량의\n독 꽃가루를 흩뿌린다."
	},

	boosters: ["charizard"]
}

export default card
