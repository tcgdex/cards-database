import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [633],
	set: Set,

	name: {
		en: "Deino",
		fr: "Solochi",
		de: "Kapuno",
		it: "Deino",
		pt: "Deino",
		es: "Deino",
		'es-mx': "Deino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			de: "Bodyslam",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			es: "Golpe Cuerpo",
			'es-mx': "Golpe de Cuerpo"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			es: "Colmillo de Oscuridad",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836178
	}
}

export default card