import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Shiftry ex",
         ja: "Shiftry Ex",
         fr: "SHIFTRY ex",
         de: "Shiftry Ex",
         es: "Exhifttry ex",
         it: "SHIFTRY EX",
         pt: "Shiftry Ex",
      },


      category: "Pokemon",
      dexId: [275],
      hp: 140,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Skill Hack",
            ja: "スキルハック",
            fr: "Piratage de compétences",
            de: "Skill Hack",
            es: "Hack de habilidad",
            it: "Skill Hack",
            pt: "Hack de habilidade",
          },
          effect: {
            en: "Look at your opponent's hand and choose a Basic Pokemon or Evolution card you find there. Choose 1 of that Pokemon's attacks. Skill Hack copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokemon is, Shiftry ex's type is still Darkness.) Shiftry ex performs that attack.",
            ja: "対戦相手の手を見て、そこにある基本的なポケモンまたは進化カードを選択してください。そのポケモンの攻撃の1つを選択してください。スキルハックは、エネルギーコストを除いて攻撃するコピーをコピーします。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）（そのポケモンがどんなタイプであっても、シフトリー・エックスのタイプはまだ暗闇です。）シフトリー・エクスはその攻撃を実行します。",
            fr: "Regardez la main de votre adversaire et choisissez une carte Pokémon ou d'évolution de base que vous y trouverez. Choisissez 1 des attaques de ce Pokémon. Skill Hack copie qui attaque, à l'exception de son coût énergétique. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) (Peu importe le type que ce Pokémon est, le type de Shiftry Ex est toujours l'obscurité.) SHIFTRY EX effectue cette attaque.",
            de: "Schauen Sie sich die Hand Ihres Gegners an und wählen Sie eine einfache Pokemon- oder Evolutionskarte, die Sie dort finden. Wählen Sie 1 der Angriffe dieses Pokemons. Skill -Hack -Kopien, die mit Ausnahme der Energiekosten angreifen. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) (Unabhängig davon, welchen Typ das Pokemon ist, der Typ von Shiftry Ex ist immer noch Dunkelheit.) Shiftry Ex führt diesen Angriff aus.",
            es: "Mira la mano de tu oponente y elige una tarjeta de evolución o Pokémon básica que encuentres allí. Elija 1 de los ataques de ese Pokémon. HACTA COMPIETAS DE HACTA QUE ATGATA EXCEPTO por su costo de energía. (Aún debe hacer cualquier otra cosa que se requiera para ese ataque). (No importa qué tipo sea ese Pokémon, el tipo de Shiftry Ex todavía es la oscuridad). SHIFTRY EX realiza ese ataque.",
            it: "Guarda la mano del tuo avversario e scegli un Pokemon di base o un'evoluzione che trovi lì. Scegli 1 degli attacchi di quel Pokemon. L'hack di abilità copia quell'attacco tranne il suo costo energetico. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) (Non importa quale tipo sia Pokemon, il tipo di Shiftry Ex è ancora oscuro.) Shiftry Ex esegue quell'attacco.",
            pt: "Olhe para a mão do seu oponente e escolha um cartão de Pokemon ou evolução básico que você encontra lá. Escolha 1 dos ataques desse Pokémon. HACK HUCK Cópias que atacam, exceto por seu custo de energia. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) (Não importa o tipo que o Pokemon seja, o tipo de shiftry ex ainda é escuridão.) Shiftry Ex executa esse ataque.",
          },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Dirge",
            ja: "ダージ",
            fr: "Chant funèbre",
            de: "Dirge",
            es: "Endecha",
            it: "Dirge",
            pt: "Dirge",
          },
          effect: {
            en: "Does 60 damage to each of your opponent's Benched Pokemon that has the same name as the Defending Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンと同じ名前を持つ相手のベンチ付きポケモンのそれぞれに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 60 dégâts à chacun des pokemon bancés de votre adversaire qui a le même nom que le Pokémon en défense. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 60 Pokémon Ihres Gegners, das den gleichen Namen wie das verteidigende Pokemon hat. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 60 daños a cada Pokémon de banca de tu oponente que tiene el mismo nombre que el Pokémon defensor. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 60 danni a ciascuno dei Pokemon in panchina del tuo avversario che ha lo stesso nome del Pokemon in carica. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Os 60 danos a cada um dos Pokémon bancos do seu oponente que têm o mesmo nome que o Pokémon defensor. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
