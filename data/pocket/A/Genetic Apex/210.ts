import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptéra",
		'es-es': "Aerodactyl",
		'it-it': "Aerodactyl",
		'de-de': "Aerodactyl",
		'pt-br': "Aerodactyl",
		'ko-kr': "프테라"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [142],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Old Amber"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Primal Wingbeat",
			'fr-fr': "Aile Primitive",
			'es-es': "Aleteo Primigenio",
			'it-it': "Folata Primordiale",
			'de-de': "Antikschwinge",
			'pt-br': "Ataque de Asa Primitivo",
			'ko-kr': "원시의날갯짓"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire mélange son Pokémon Actif avec son deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo de nuevo en su baraja y baraja todas las cartas.",
			'it-it': "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo nel suo mazzo.",
			'de-de': "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon in sein Deck.",
			'pt-br': "Jogue uma moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele no baralho dele.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 덱으로 되돌린다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		'en-us': "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
		'fr-fr': "On raconte qu'aujourd'hui encore, il est impossible de restaurer\nà la perfection ce Pokémon féroce de l'ère préhistorique.",
		'es-es': "Un feroz Pokémon de la época prehistórica al\nque no bastan todos los avances tecnológicos\nactuales para regenerar a la perfección.",
		'it-it': "È un feroce Pokémon dell'antichità.\nPare che con la tecnologia odierna non\nsia possibile rigenerarlo perfettamente.",
		'de-de': "Selbst mit moderner Technologie scheint es\nunmöglich, ein perfektes Exemplar von diesem\nwilden urzeitlichen Pokémon zu reproduzieren.",
		'pt-br': "Um Pokémon feroz de tempos antigos.\nPelo visto, nem a tecnologia moderna conseguiu\nproduzir um espécime restaurado com perfeição.",
		'ko-kr': "고대의 거칠고 사나운 포켓몬이다.\n완벽한 복원은 현대의\n과학으로도 불가능하다고 한다."
	},

	boosters: ["mewtwo"]
}

export default card
