import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Wishiwashi ex",
		fr: "Froussardine‑ex",
		de: "Lusardin-ex",
		es: "Wishiwashi ex",
		it: "Wishiwashi-ex",
		pt: "Wishiwashi ex",
		'es-mx': "Wishiwashi ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Oceanic Gain",
			fr: "Gain Océanique",
			de: "Ozeanischer Vorteil",
			es: "Ganancia Oceánica",
			it: "Vantaggio Oceanico",
			pt: "Vantagem Oceânica",
			'es-mx': "Ganancia Oceánica"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Heal 50 damage from this Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Soignez 50 dégâts de ce Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Heile 50 Schadenspunkte bei diesem Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Cura 50 puntos de daño a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Cura questo Pokémon da 50 danni.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Cure 50 pontos de dano deste Pokémon.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Cura 50 puntos de daño a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			de: "Hydroplatscher",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			'es-mx': "Hidrosalpicadura"
		},

		damage: 220,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,

	thirdParty: {
		tcgplayer: 727590,
		cardmarket: 918959
	}
}

export default card