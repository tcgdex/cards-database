import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Absol ex",
         ja: "絶対的なex",
         fr: "Absolu Ex",
         de: "Absolut Ex",
         es: "Absoluto ex",
         it: "Absol Ex",
         pt: "Absol Ex",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [359],
      hp: 100,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Cursed Eyes",
            ja: "呪われた目",
            fr: "Yeux maudits",
            de: "Verfluchte Augen",
            es: "Ojos malditos",
            it: "Occhi maledetti",
            pt: "Olhos amaldiçoados",
          },
          effect: {
            en: "Once during your turn, when you put Absol ex from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's PokÃ©mon to another of his or her PokÃ©mon.",
            ja: "ターン中に、ベンチに手から絶対的なEXを置くと、相手のポケモンの1つから彼または彼女のポカモンの別のダメージカウンターを移動できます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Absolu Ex de votre main sur votre banc, vous pouvez déplacer 3 compteurs de dégâts de l'un des poké de votre adversaire à un autre de son poké.",
            de: "Sobald Sie in Ihrem Zug, wenn Sie Absol Ex von Ihrer Hand auf Ihre Bank legen, können Sie 3 Schadenszähler von 1 der Poké Mons Ihres Gegners zu einem anderen seiner Pokémon verlagern.",
            es: "Una vez durante su turno, cuando pones a Absol Ex de tu mano en tu banco, puedes mover 3 contadores de daño de 1 de los Poké de tu oponente a otro de su Poké Mon.",
            it: "Una volta durante il tuo turno, quando metti la mano assoluto dalla tua mano sulla panchina, puoi spostare 3 contatori di danno da 1 del poké del tuo avversario a un altro del suo poké mon.",
            pt: "Uma vez durante o seu turno, quando você coloca o Absol Ex da sua mão em seu banco, poderá mover 3 contadores de danos de 1 do Poké de seu oponente para outro de seu Poké © seg.",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Psychic Pulse",
            ja: "サイキックパルス",
            fr: "Pouls psychique",
            de: "Psychischer Puls",
            es: "Pulso psíquico",
            it: "Pulse psichica",
            pt: "Pulso psíquico",
          },
          effect: {
            en: "Does 10 damage to each of your opponent's Benched Pokemon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ダメージがカウンターを伴う相手のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chacun des pokemon bancés de votre adversaire qui a des compteurs de dégâts dessus. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 das Bankpokémon Ihres Gegners, das Schadenserzähler hat. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon de banca de tu oponente que tiene algún contador de daño. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario che ha contatori di danni su di esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um dos Pokémon bancos do seu oponente que tem algum contador de danos. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
