import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Jolteon",
         ja: "ジョルテオン",
         fr: "Jolteon",
         de: "Jolteon",
         es: "Jolteón",
         it: "Jolteon",
         pt: "Jolteon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Attract Current",
            ja: "電流を引き付けます",
            fr: "Attirer le courant",
            de: "Strom anziehen",
            es: "Atraer corriente",
            it: "Attirare la corrente",
            pt: "Atrair corrente",
          },
          effect: {
            en: "Flip a coin. If heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokemon. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、デッキを稲妻エネルギーカードに検索し、ポケモン1枚に取り付けます。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre jeu une carte d'énergie Lightning et fixez-la à 1 de votre Pokémon. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Lightning Energy -Karte und fügen Sie sie an 1 Ihres Pokémons an. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, busque en su mazo una tarjeta de energía Lightning y adhiérase a 1 de su Pokémon. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se la testa, cerca nel tuo mazzo una carta energetica Lightning e collegala a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, procure seu baralho para obter um cartão de energia Lightning e prenda -o a 1 do seu Pokémon. Afaste seu baralho depois.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Multi Pulse",
            ja: "マルチパルス",
            fr: "Multipul",
            de: "Multi -Puls",
            es: "Pulso múltiple",
            it: "Multi Pulse",
            pt: "Pulso múltiplo",
          },
          effect: {
            en: "If Jolteon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokemon is now Confused.",
            ja: "Jolteonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、防御ポケモンが混乱しています。",
            fr: "Si Jolteon a 3 types ou plus de cartes d'énergie de base qui y sont attachées, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est désormais confus.",
            de: "Wenn Jolteon 3 oder mehr verschiedene Arten von grundlegenden Energiekarten befindet, verursacht dieser Angriff 40 Schaden zuzüglich 20 weitere Schäden und das verteidigende Pokémon ist jetzt verwirrt.",
            es: "Si Jolteon tiene 3 o más tipos diferentes de cartas de energía básicas unidas, este ataque hace 40 daños más 20 daños más y el Pokémon defensor ahora está confundido.",
            it: "Se Jolteon ha 3 o più tipi diversi di carte di energia di base collegate ad esso, questo attacco fa 40 danni più 20 danni in più e il Pokemon in carica è ora confuso.",
            pt: "Se Jolteon tiver 3 ou mais tipos diferentes de cartões de energia básicos anexados a ele, esse ataque causará 40 danos mais 20 mais danos e o Pokemon defensor agora está confuso.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
