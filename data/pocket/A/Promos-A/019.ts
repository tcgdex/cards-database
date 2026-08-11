import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi",
		'es-es': "Greninja",
		'it-it': "Greninja",
		'de-de': "Quajutsu",
		'pt-br': "Greninja",
		'ko-kr': "개굴닌자"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",

	dexId: [658],
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Water Shuriken",
			'fr-fr': "Sheauriken",
			'es-es': "Shuriken de Agua",
			'it-it': "Acqualame",
			'de-de': "Wasser-Shuriken",
			'pt-br': "Estrela Ninja de Água",
			'ko-kr': "물수리검"
		},

		effect: {
			'en-us': "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez infliger 20 dégâts à un Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, puedes hacer 20 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, puoi infliggere 20 danni a uno dei Pokémon del tuo avversario.",
			'de-de': "Einmal während deines Zuges kannst du 1 Pokémon deines Gegners 20 Schadenspunkte zufügen.",
			'pt-br': "Uma vez durante o seu turno, você poderá causar 20 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 상대의 포켓몬 1마리에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Mist Slash",
			'fr-fr': "Tranche-Brume",
			'es-es': "Golpe Niebla",
			'it-it': "Squarcianebbia",
			'de-de': "Schleierschlitzer",
			'pt-br': "Golpe de Névoa",
			'ko-kr': "안개베기"
		},

		cost: ["Water", "Colorless"],
		damage: 60
	}],

	hp: 120,

	evolveFrom: {
		'en-us': "Frogadier"
	},

	description: {
		'en-us': "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.",
		'fr-fr': "Il transforme des jets d'eau sous pression en redoutables\nshuriken. Une fois lancés, ils tournent si vite qu'ils peuvent\nmême couper le métal.",
		'es-es': "Comprime el agua y crea estrellas ninja con\nlas que ataca al enemigo. Cuando las hace girar\na gran velocidad, cortan en dos hasta el metal.",
		'it-it': "Crea lame d'acqua micidiali che ruotano ad alta\nvelocità e, se lanciate, possono perforare il metallo.",
		'de-de': "Es stellt Wurfsterne aus komprimiertem Wasser\nher, die durch ihre hohe Drehgeschwindigkeit\nbeim Werfen sogar Metall durchtrennen.",
		'pt-br': "Cria estrelas ninja de água comprimida.\nAo girá-las e atirá-las em alta velocidade,\nas estrelas podem dividir metais ao meio.",
		'ko-kr': "물을 압축시켜 수리검을\n만들어 낸다. 고속으로 회전시키며\n던지면 금속도 두 동강이 난다."
	},

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol2"]
}

export default card
