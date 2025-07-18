import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Sudowoodo",
         ja: "sudowoodo",
         fr: "Sudowoodo",
         de: "Sudowoodo",
         es: "Sudowoodo",
         it: "Sudowoodo",
         pt: "SUDOWOODO",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [185],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

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
            en: "Choose 1 of the Defending Pokemon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack.",
            ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。 Sudowoodoにその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）Sudowoodoはその攻撃を実行します。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Copiez des copies de cette attaque. Cette attaque ne fait rien si Sudowoodo n'a pas l'énergie nécessaire pour utiliser cette attaque. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) Sudowoodo effectue cette attaque.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Kopieren Kopien diesen Angriff. Dieser Angriff tut nichts, wenn Sudowoodo nicht über die Energie verfügt, die erforderlich ist, um diesen Angriff zu nutzen. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) Sudowoodo führt diesen Angriff durch.",
            es: "Elija 1 de los ataques defensores de Pokémon. Copie copias que ataquen. Este ataque no hace nada si Sudowoodo no tiene la energía necesaria para usar ese ataque. (Aún debes hacer cualquier otra cosa necesaria para ese ataque). Sudowoodo realiza ese ataque.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Copia copie quell'attacco. Questo attacco non fa nulla se Sudowoodo non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) Sudowoodo esegue quell'attacco.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Copie cópias que ataques. Esse ataque não faz nada se Sudowoodo não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) Sudowoodo realiza esse ataque.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Karate Chop",
            ja: "空手チョップ",
            fr: "Karaté Chop",
            de: "Karate Chop",
            es: "Karate Chop",
            it: "Carate Chop",
            pt: "Costeleta de karatê",
          },
          effect: {
            en: "Does 50 damage minus 10 damage for each damage counter on Sudowoodo.",
            ja: "Sudowoodoのダメージカウンターごとに50のダメージを引いた10のダメージを引いてください。",
            fr: "Fait 50 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Sudowoodo.",
            de: "Hat 50 Schäden minus 10 Schaden für jeden Schadenschalter auf Sudowoodo.",
            es: "Hace 50 daños menos 10 daños por cada mostrador de daño en Sudowoodo.",
            it: "Fa 50 danni meno 10 danni per ciascun contatore di danni su Sudowoodo.",
            pt: "50 danos menos 10 danos para cada balcão de danos em Sudowoodo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
