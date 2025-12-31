import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja",
		fr: "Amphinobi",
		es: "Greninja",
		it: "Greninja",
		de: "Quajutsu",
		'pt-br': "Greninja",
		ko: "개굴닌자"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Water Shuriken",
			fr: "Sheauriken",
			es: "Shuriken de Agua",
			it: "Acqualame",
			de: "Wasser-Shuriken",
			'pt-br': "Estrela Ninja de Água",
			ko: "물수리검"
		},

		effect: {
			en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez infliger 20 dégâts à un Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, puedes hacer 20 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, puoi infliggere 20 danni a uno dei Pokémon del tuo avversario.",
			de: "Einmal während deines Zuges kannst du 1 Pokémon deines Gegners 20 Schadenspunkte zufügen.",
			'pt-br': "Uma vez durante o seu turno, você poderá causar 20 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "자신의 차례에 1번 사용할 수 있다. 상대의 포켓몬 1마리에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			en: "Mist Slash",
			fr: "Tranche-Brume",
			es: "Golpe Niebla",
			it: "Squarcianebbia",
			de: "Schleierschlitzer",
			'pt-br': "Golpe de Névoa",
			ko: "안개베기"
		},

		cost: ["Water", "Colorless"],
		damage: 60
	}],

	dexId: [658],

	hp: 120,

	evolveFrom: {
		en: "Frogadier"
	},

	description: {
		en: "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.",
		fr: "Il transforme des jets d'eau sous pression en redoutables\nshuriken. Une fois lancés, ils tournent si vite qu'ils peuvent\nmême couper le métal.",
		es: "Comprime el agua y crea estrellas ninja con\nlas que ataca al enemigo. Cuando las hace girar\na gran velocidad, cortan en dos hasta el metal.",
		it: "Crea lame d'acqua micidiali che ruotano ad alta\nvelocità e, se lanciate, possono perforare il metallo.",
		de: "Es stellt Wurfsterne aus komprimiertem Wasser\nher, die durch ihre hohe Drehgeschwindigkeit\nbeim Werfen sogar Metall durchtrennen.",
		'pt-br': "Cria estrelas ninja de água comprimida.\nAo girá-las e atirá-las em alta velocidade,\nas estrelas podem dividir metais ao meio.",
		ko: "물을 압축시켜 수리검을\n만들어 낸다. 고속으로 회전시키며\n던지면 금속도 두 동강이 난다."
	},

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol2"]
}

export default card
