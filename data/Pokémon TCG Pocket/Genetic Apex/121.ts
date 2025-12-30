import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		de: "Alpollo",
		'pt-br': "Haunter",
		ko: "고우스트"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",

	dexId: [93],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			de: "Irrlicht",
			'pt-br': "Fogo Fátuo",
			ko: "도깨비불"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
		fr: "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
		es: "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
		it: "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
		de: "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
		'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
		ko: "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다."
	},

	boosters: ["mewtwo"]
}

export default card
