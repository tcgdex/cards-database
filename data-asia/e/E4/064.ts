import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Ditto",
         ja: "同上",
         fr: "Idem",
         de: "Dito",
         es: "Ídem",
         it: "Idem",
         pt: "Idem",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [132],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Prismatic Body",
            ja: "プリズムボディ",
            fr: "Corps prismatique",
            de: "Prismatischer Körper",
            es: "Cuerpo prismático",
            it: "Corpo prismatico",
            pt: "Corpo prismático",
          },
          effect: {
            en: "Each basic Energy card attached to Ditto provides every type of Energy but provides only 1 Energy at a time.",
            ja: "Dittoに添付された各基本エネルギーカードは、あらゆる種類のエネルギーを提供しますが、一度に1つのエネルギーしか提供しません。",
            fr: "Chaque carte d'énergie de base attachée à Ditto fournit tous les types d'énergie mais ne fournit qu'une énergie à la fois.",
            de: "Jede mit dem Ditto befestigte grundlegende Energiekarte bietet jede Art von Energie, bietet jedoch nur 1 Energie gleichzeitig.",
            es: "Cada tarjeta de energía básica unida a ídem proporciona todo tipo de energía, pero proporciona solo 1 energía a la vez.",
            it: "Ogni carta di energia di base collegata a Ditto fornisce ogni tipo di energia ma fornisce solo 1 energia alla volta.",
            pt: "Cada cartão de energia básico anexado ao idem fornece todos os tipos de energia, mas fornece apenas 1 energia por vez.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Copy",
            ja: "コピー",
            fr: "Copie",
            de: "Kopie",
            es: "Copiar",
            it: "Copia",
            pt: "Cópia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. Copy copies that attack. This attack does nothing if Ditto doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
            ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。この攻撃は、その攻撃を使用するのに必要なエネルギーがない場合、何もしません。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Copiez des copies de cette attaque. Cette attaque ne fait rien si Ditto n'a pas l'énergie nécessaire pour utiliser cette attaque. (You must still do anything else required in order to use that attack.)",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Kopieren Kopien diesen Angriff. Dieser Angriff tut nichts, wenn Ditto nicht über die Energie verfügt, die notwendig ist, um diesen Angriff zu verwenden. (Sie müssen noch alles tun, was erforderlich ist, um diesen Angriff zu verwenden.)",
            es: "Elija 1 de los ataques defensores de Pokémon. Copie copias que ataquen. Este ataque no hace nada si ídem no tiene la energía necesaria para usar ese ataque. (Todavía debe hacer cualquier otra cosa que se requiera para usar ese ataque).",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Copia copie quell'attacco. Questo attacco non fa nulla se Ditto non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per usare quell'attacco.)",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Copie cópias que ataques. Este ataque não faz nada se o idem não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para usar esse ataque.)",
          },
        },
      ],

      retreat: 1,

};
