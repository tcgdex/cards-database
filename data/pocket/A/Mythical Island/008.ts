import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic",
		fr: "Lampignon",
		es: "Shiinotic",
		it: "Shiinotic",
		de: "Lamellux",
		'pt-br': "Shiinotic",
		ko: "마셰이드"
	},

	illustrator: "Mizue",
	category: "Pokemon",

	dexId: [756],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Morelull"
	},

	description: {
		en: "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.",
		fr: "Il attire ses proies et les endort grâce au\nclignotement de ses spores. Il aspire ensuite\nleur énergie vitale du bout de ses doigts.",
		es: "Atrae y duerme a su presa con la luz parpadeante\nde sus esporas y luego le absorbe la energía vital\ncon la punta de los dedos.",
		it: "Attira a sé la preda con la luce intermittente\ndelle sue spore e l'addormenta. Poi ne succhia\nl'energia vitale con le estremità delle dita.",
		de: "Mit blinkenden Sporen lullt es seine Beute\nin den Schlaf und saugt ihr dann über seine\nFingerspitzen die Lebenskraft aus.",
		'pt-br': "Os seus esporos tremeluzentes atraem as presas e as deixam adormecidas.\nAssim que este Pokémon coloca a sua presa para dormir, drena a vitalidade\ndela com as pontas dos seus dedos.",
		ko: "깜빡이는 포자의 빛으로\n먹이를 유인해서 잠들게 한다.\n손끝으로 생기를 흡수한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flickering Spores",
			fr: "Spores Scintillantes",
			es: "Esporas Parpadeantes",
			it: "Spore Guizzanti",
			de: "Flimmernde Sporen",
			'pt-br': "Esporos Tremeluzentes",
			ko: "흔들리는포자"
		},

		damage: 50,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
