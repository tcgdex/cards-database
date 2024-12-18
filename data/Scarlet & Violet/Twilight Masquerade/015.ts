import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [811],
	set: Set,

	name: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boom Boom Groove",
			fr: "Groove Boum Boum",
			es: "Ritmo Bum Bum",
			it: "Ritmo Bum Bum",
			pt: "Batidão Ritmado",
			de: "Bumm-Bumm-Groove"
		},

		effect: {
			en: "Once during your turn, if your Active Pokémon has the Festival Lead Ability, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, si votre Pokémon Actif a le talent Tête de la Fête, vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si tu Pokémon Activo tiene la habilidad Líder del Festival, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se il tuo Pokémon attivo ha l'abilità Maestro della Festa, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, se o seu Pokémon Ativo tiver a Habilidade Líder de Festas, você poderá procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dein Aktives Pokémon die Fähigkeit Festmeister hat, kannst du dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	}
}

export default card