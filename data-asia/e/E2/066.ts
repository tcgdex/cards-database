import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Blissey - 066/092",
         ja: "Blissey -066/092",
         fr: "Blissey - 066/092",
         de: "Blissey - 066/092",
         es: "Blissey - 066/092",
         it: "Blissey - 066/092",
         pt: "Blissey - 066/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [242],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Happy Healing",
            ja: "幸せな癒し",
            fr: "Heureuse guérison",
            de: "Glückliche Heilung",
            es: "Happy Healing",
            it: "Felice guarigione",
            pt: "Cura feliz",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, choose 1 of your Benched Pokmon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokmon. This power can't be used if Blissey is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、1つのベンチポクモンを選択し、コインをひっくり返します。頭の場合は、Blisseyに取り付けられたエネルギーの数を数え、選択したベンチポクモンからその多くのダメージカウンターを削除します。 Blisseyが特別な状態の影響を受けた場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, choisissez 1 de votre pokmon banc et retournez une pièce. Si les têtes, comptez le nombre d'énergie attaché à Blissey, puis retirez autant de compteurs de dégâts du Pokmon bancté choisi. Cette puissance ne peut pas être utilisée si Blissey est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em>, wählen Sie 1 Ihrer Bank -Pokmon und drehen Sie eine Münze. Wenn Sie Köpfe sind, zählen Sie die Anzahl der an Blissey befestigten Energie und entfernen Sie dann, dass viele Schadenszähler aus dem ausgewählten Bank -Pokmon. Diese Kraft kann nicht verwendet werden, wenn Blissey von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, elija 1 de su banca Pokmon y voltee una moneda. Si se dirige, cuente el número de energía unida a Blissey y luego retire los contadores de daños de la banca elegida Pokmon. Esta potencia no se puede usar si Blissey se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, scegli 1 del tuo Pokmon in panchina e capovolgi una moneta. Se le teste, contano il numero di energia attaccata a Blissey e quindi rimuovi molti contatori di danno dai Pokmon in panchina scelti. Questa potenza non può essere utilizzata se Blissey è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, escolha 1 do seu Pokmon com bancada e vire uma moeda. Se as cabeças, contem o número de energia anexada ao Blissey e remova muitos contadores de danos do Pokmon em bancado escolhido. Esse poder não pode ser usado se Blissey for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Smash Bomber",
            ja: "スマッシュ爆撃機",
            fr: "Bombardier",
            de: "Smash Bomber",
            es: "Bombardero",
            it: "Smash Bomber",
            pt: "Smash Bomber",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
