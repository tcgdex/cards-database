import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
		es: "Aerodactyl",
		it: "Aerodactyl",
		de: "Aerodactyl",
		'pt-br': "Aerodactyl",
		ko: "프테라"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Old Amber"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Primal Wingbeat",
			fr: "Aile Primitive",
			es: "Aleteo Primigenio",
			it: "Folata Primordiale",
			de: "Antikschwinge",
			'pt-br': "Ataque de Asa Primitivo",
			ko: "원시의날갯짓"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire mélange son Pokémon Actif avec son deck.",
			es: "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo de nuevo en su baraja y baraja todas las cartas.",
			it: "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo nel suo mazzo.",
			de: "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon in sein Deck.",
			'pt-br': "Jogue uma moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele no baralho dele.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 덱으로 되돌린다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
		fr: "On raconte qu'aujourd'hui encore, il est impossible de restaurer\nà la perfection ce Pokémon féroce de l'ère préhistorique.",
		es: "Un feroz Pokémon de la época prehistórica al\nque no bastan todos los avances tecnológicos\nactuales para regenerar a la perfección.",
		it: "È un feroce Pokémon dell'antichità.\nPare che con la tecnologia odierna non\nsia possibile rigenerarlo perfettamente.",
		de: "Selbst mit moderner Technologie scheint es\nunmöglich, ein perfektes Exemplar von diesem\nwilden urzeitlichen Pokémon zu reproduzieren.",
		'pt-br': "Um Pokémon feroz de tempos antigos.\nPelo visto, nem a tecnologia moderna conseguiu\nproduzir um espécime restaurado com perfeição.",
		ko: "고대의 거칠고 사나운 포켓몬이다.\n완벽한 복원은 현대의\n과학으로도 불가능하다고 한다."
	}
}

export default card
