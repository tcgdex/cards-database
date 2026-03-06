import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

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

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [756],
	hp: 100,
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
			en: "Flickering Light",
			fr: "Lueur Vacillante",
			es: "Luz Titilante",
			it: "Luce Tremula",
			de: "Flackerndes Licht",
			'pt-br': "Luz Tremeluzente",
			ko: "깜빡이는빛"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo\nturno del tuo avversario, il Pokémon difensore non può\nattaccare.",
			de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante o próximo turno do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 기술을 받은 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card